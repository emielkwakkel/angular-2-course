import { LikeComponent } from './like.component';

xdescribe('LikeComponent', () => {
    let component: LikeComponent;

    beforeEach(() => {
        component = new LikeComponent();
    });

    it('should add one like if like function is called', () => {
        // TODO Call the like function on the component.

        expect(component.totalLikes).toBe(1);
    });

    it('should substract one like if dislike function is called', () => {
        // TODO Call the dislike function on the component.

        expect(component.totalLikes).toBe(-1);
    });
});