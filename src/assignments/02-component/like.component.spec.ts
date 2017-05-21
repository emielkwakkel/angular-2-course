import { LikeComponent } from './like.component';

fdescribe('LikeComponent', () => {
    let component: LikeComponent;

    beforeEach(() => {
        component = new LikeComponent();
    });

    it('should add one like if like function is called', () => {
        component.like();

        expect(component.totalLikes).toBe(1);
    });

    it('should substract one like if dislike function is called', () => {
        component.dislike();

        expect(component.totalLikes).toBe(-1);
    });
});